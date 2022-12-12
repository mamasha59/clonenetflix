import { useRouteError } from "react-router-dom";

export default function ErrorScreen() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-[100vh] bg-default text-[#fff] flex items-center justify-center flex-col">
      <h1 className="text-[red] mb-11">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-[red] mt-11">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}