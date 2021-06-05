import "./style.css"

export default function Project({ name, description, deployed, repository, image }) {

    return (
        <>
            <div className="card col-12 col-md-6 col-lg-6 col-xl-6 col-md-6" style={{ width: "40rem", borderBottom: "5px solid #3178C6", marginTop: "40px", marginRight: "20px", borderRadius: "0px" }}>
                <div className="card-body">
                    <img src={image} alt={name} width="100%" style={{ display: "relative" }} height="250px" />
                    <p id="name" className="card-title">{name}</p>
                    <p id="description" className="card-text">{description}</p>
                    <div style={{ textAlign: "right", marginTop: "5px" }}>
                        <a href={deployed} target="_blank" title="Deployed application" rel="noreferrer"><i id="deployedIcon" className="fa fa-rocket fa-2x"></i></a>
                        <a href={repository} target="_blank" title="Application's repository" rel="noreferrer"><i id="repositoryIcon" className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}