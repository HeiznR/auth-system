type TSignup = {
  name: string;
  email: string;
  password: string;
};

export const signupJWT = async (props: TSignup): Promise<any> => {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
  if (!res.ok) {
    throw new Error("Ошибка сети");
  }
  return res.json();
};

type TLogin = {
  email: string;
  password: string;
};

export const loginJWT = async (props: TLogin): Promise<any> => {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
  if (!res.ok) {
    throw new Error("Ошибка сети");
  }
  return res.json();
};
