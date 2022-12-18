import { Link, useRouteError } from "react-router-dom";

export default function ErrorScreen() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-[100vh] bg-default text-[#fff] flex items-center justify-center flex-col">
      <h1 className="text-[red] mb-11">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-[red] mt-11 text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    <Link to="/signup"><button className="mt-8 border-b-[#fff] border-2 px-3 py-1 hover rounded-md">Go to Sign Up!</button></Link> 
    </div>
  );
}