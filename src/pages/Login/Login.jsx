const googleLogo = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png`;
const gitHubLogo = `https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png`;

const Login = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <form
        action=""
        className="space-y-2 text-center pt-10 px-10 pb-6 bg-white border rounded-lg"
      >
        <input
          required
          name="email"
          type="email"
          className="border-2 rounded-lg input-md outline-none"
          placeholder="Email address"
        />{" "}
        <br />
        <input
          required
          name="password"
          type="password"
          className="border-2 rounded-lg input-md outline-none"
          placeholder="Password"
        />{" "}
        <br />
        <input
          type="submit"
          value={"Sign Up"}
          className="btn  bg-black text-white input-md hover:bg-gray-900"
        />{" "}
        <br />
        <p className="text-2xl font-semibold">Or</p>
        <p className="border-b-2 pb-2">Sign up with</p>
        <figure className="flex gap-8 pt-2 justify-center text-center">
          <img className="w-8 cursor-pointer rounded-full" src={googleLogo} alt="" />
          <img className="w-8 cursor-pointer rounded-full" src={gitHubLogo} alt="" />
        </figure>
      </form>
    </div>
  );
};

export default Login;
