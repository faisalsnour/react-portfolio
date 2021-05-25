import "./style.css"

export default function Project({ name, description, deployed, repository, image }) {

    return (
        <>
            <div className="card col-12 col-md-6 col-lg-6 col-xl-6 col-md-6" style={{ width: "40rem", borderBottom: "5px solid #3178C6", marginTop: "40px", marginRight: "20px", borderRadius: "0px" }}>
                <div className="card-body">
                    <img src={image} alt={name} width="100%" style={{ display: "relative" }} height="250px" />
                    <h5 id="name" className="card-title">{name}</h5>
                    <p id="description" className="card-text">{description}</p>
                    <div style={{ textAlign: "right", marginTop: "5px" }}>
                        <a href={deployed} target="_blank" title="Deployed application" rel="noreferrer"><i id="deployedIcon" class="fa fa-rocket fa-2x"></i></a>
                        <a href={repository} target="_blank" title="Application's repository" rel="noreferrer"><i id="repositoryIcon" class="fab fa-github fa-2x"></i></a>
                        {/* <a id="repoLogo" href="https://www.faisal" target="_blank" rel="noreferrer" title="Apply on Indeed"><img class="img-fluid" width="80px" src={""} alt="Indeed Job Opportunity" /></a> */}
                    </div>
                </div>
            </div>
        </>
    )
}