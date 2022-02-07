import { Home } from '../views/Home'
import { Characters } from '../views/Characters'
import { NoMatch } from '../views/NoMatch'
import { Person } from '../views/Person'
import { About } from '../views/About'


export function PublicRouter()
{
    return [
        {
            path: '/',
            element: Home
        },
        {
            path: '/person',
            element: Person
        },
        {
            path: '/about',
            element: About
        },
        {
            path: '/character/:name',
            element: Characters
        },
        {
            path: '*',
            element: NoMatch
        },
    ]
}