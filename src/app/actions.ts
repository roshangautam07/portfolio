'use server';
import { Resend } from 'resend';

export async function submitForm(prevState: any, formData: FormData) {
  const token = formData.get("cf-turnstile-response");
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!token) {
    return { message: "Turnstile token not found." };
  }

  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        response: token,
      }),
    }
  );

  const turnstileData = await turnstileResponse.json();

  if (!turnstileData.success) {
    return { message: "Turnstile verification failed." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'roshangautam07@gmail.com',
      subject: `New message from ${name} and email: ${email}`,
      html: `<p>${message}</p>`,
    });

    return { message: "Form Submitted Successfully" };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to submit form' };
  }
}
