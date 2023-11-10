import './style.css';
import datas from '../Data'
import Card from "../Card"

export default function Gallery() {

    return (
        <main className='home_gallery'>
                        {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        description={data.description}
                        techs={data.techs}
                        workUrl={data.workUrl}
                        examples={data.examples}
                    />
                    )
                })}
         </main>
    )
}