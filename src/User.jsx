export default function User({user}){
    console.log(user)
    const {name, company, address} = user;
    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Company name: {company.name}</p>
            <p>City: {address.city}</p>
        </div>
    )
}