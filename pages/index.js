import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <a href="/portfolio">ahref Portfolio</a>
          {/* this refreshes the page. May cause you to lose app wide states stored in react redux */}
        </li>
        <li>
          <Link href="/portfolio">Link Portfolio</Link>
        </li>   
        <li>
          <Link href="/clients">Clients</Link>
        </li>                
      </ul>
    </div>
  )
}

export default HomePage;