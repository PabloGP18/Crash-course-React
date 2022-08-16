
export function NameList(){
    const names = ['Tony','Steve','Thor']

    return <div>
        {
            names.map((name) =>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
}