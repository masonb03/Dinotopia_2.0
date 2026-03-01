import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="container">
        <div className="row">
            <h6>
                <span>
                    Welcome to Dinotopia
                </span>
            </h6>
            <h1>
                A world where dinosaurs never vanished.
            </h1>
            <p>
                Journey through a land where towering herbivores roam emerald valleys, fierce carnivores rule ancient forests, and the mysteries of the Triassic, Jurassic, and Cretaceous eras live on. Explore detailed profiles, uncover prehistoric facts, and discover the creatures that shaped Earth’s distant past.
            </p>
            <Link>
                Explore a new world
            </Link>
        </div>
    </div>
  )
}

export default Landing