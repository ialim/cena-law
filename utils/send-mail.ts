
export const sendEmail = async (data) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    return {
        ok: true,
    }
  } catch (error) {
    // toast error message. whatever you wish
    return {
        ok: false,
        error: "Message not sent, please try again later"
    }
  }
};

