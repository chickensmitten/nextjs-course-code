import { useRouter } from "next/router"

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  
  return (
    <div>
      <p>The Project Page for a Specific Project for a selected client</p>
    </div>
  )
}

export default SelectedClientProjectPage

// path is http://localhost:3000/clients/asdasdasdasad/projects