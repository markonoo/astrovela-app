// Import the shared navigation links
import { navigationLinks } from "@/utils/navigation"

export default function Page() {
  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

