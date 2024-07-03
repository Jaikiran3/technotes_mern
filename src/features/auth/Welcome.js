import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'; 

const Welcome = () => {

    const {username,isManager,isAdmin} = useAuth()
    const date = new Date()
    const timeZone = 'Asia/Kolkata';
    const today = new Intl.DateTimeFormat('ind', { timeStyle: 'medium', dateStyle: 'medium', hour12: true,timeZone }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome { username}!</h1>

            <p><Link to="/dash/notes">View techNotes</Link></p>

            <p><Link to="/dash/notes/new">Add new techNotes</Link></p>

            {(isAdmin || isManager) && <p><Link to="/dash/users">View users settings</Link></p>}

            {(isAdmin || isManager) && <p><Link to="/dash/users/new">Add new User</Link></p> }

        </section>
    )

    return content
}
export default Welcome