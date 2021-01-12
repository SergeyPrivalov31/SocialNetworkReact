import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://as01.epimg.net/en/imagenes/2020/12/01/football/1606850515_403552_noticia_normal.jpg',
                    followed: false,
                    fullName: 'Serhio',
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://as01.epimg.net/en/imagenes/2020/12/01/football/1606850515_403552_noticia_normal.jpg',
                    followed: true,
                    fullName: 'Olya',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://as01.epimg.net/en/imagenes/2020/12/01/football/1606850515_403552_noticia_normal.jpg',
                    followed: false,
                    fullName: 'Dasha',
                    status: 'I am a chef boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}
export default Users;