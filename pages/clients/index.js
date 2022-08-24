import Link from "next/link";

function ClientsPage() {
  const clients = [
    {id: "max", name: "Maximillian"},
    {id: "mink", name: "Minksy"}
  ];

  return(
    <div>
      <h1>Client Page</h1>
      <ul>
        { clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[id]',
              query: {id: client.id},
            }}>{client.name}</Link>
          </li>          
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage;

// path is http://localhost:3000/clients