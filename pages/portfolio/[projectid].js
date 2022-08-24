import { userRouter, withRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  // we can then request to some backend server with router.query. i.e. finding the object with id from dynamic routes

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage;