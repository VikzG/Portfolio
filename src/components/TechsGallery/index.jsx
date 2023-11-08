import './style.css';
import TechsCard from "../TechsCard/index";
import techdatas from '../Techsdata/index';

export default function TechsGallery() {

    return (
        <main className='techs-gallery'>
                        {techdatas.map(data => {
                return (
                    <TechsCard
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        category={data.category}
                    />
                )
            })}

        </main>
    )
}