export const signup = (email, password) => async (dispatch) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    const errorId = errorData.error.message;
    let message = 'Something went wrong';
    if (errorId === 'EMAIL_EXISTS') {
      message = 'This email already exists.';
    }
    throw new Error(message);
  }
  const resData = await response.json();
  console.log(resData);
  dispatch({
    type: 'SIGNUP',
  });
};

export const signin = (email, password) => async (dispatch) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    const errorId = errorData.error.message;
    let message = 'Something went wrong';
    if (errorId === 'EMAIL_NOT_FOUND') {
      message = 'This email could not be found.';
    } else if (errorId === 'INVALID_PASSWORD') {
      message = 'The password is not valid';
    }
    throw new Error(message);
  }
  const resData = await response.json();
  console.log(resData);
  dispatch({
    type: 'LOGIN',
  });
};
