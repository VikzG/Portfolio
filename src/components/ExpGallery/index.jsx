import './style.css';
import ExpCard from '../ExpCard';
import ExpDatas from '../ExpDatas'

export default function ExpGallery() {

    return (
        <main className='exp_gallery'>
                        {ExpDatas.map(data => {
                return (
                    <ExpCard
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        description={data.description}
                    />
                )
            })}

        </main>
    )
}