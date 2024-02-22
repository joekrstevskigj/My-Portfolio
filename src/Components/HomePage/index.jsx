import MyPhoto from '../../assets/My_Photo.png';
import myCV from '../../assets/files/CV-Gjorgji Krstevski-Joe.pdf';

function HomePage() {

    return (
        <div className='container-fluid'>
            <section className='row border-dark border justify-content-center bg-info-subtle bg-gradient ' >
                <img src={MyPhoto} alt='Profile image of the Developer' style={{ width: "180px", height: "100%" }}
                    className='rounded-circle border border-dark p-1 my-4' />
                <div className='text-center mb-4'>
                    <h1 className='titleFont'>
                        Gjorgji Krstevski - Joe
                    </h1>
                    <h4 className='titleFont'>A Full Stack Web Developer</h4>
                    <p>- with game and mobile application background -</p>
                    <a href={myCV} className="btn btn-outline-dark mt-3" download>Download My Resume</a>
                </div>
            </section>
            <section className='row' style={{ minHeight: '300px', textAlign: 'justify' }}>
                <p className='col-sm-3'></p>
                <p className='col-sm-6 text-center p-5 '><span className='text-info fs-4'>Welcome!</span> Started my career more than 15 years ago as an independent contractor, making websites for a small business. Then, got into the world of web gaming. Started with a Facebook game, and ended with 12 flash games, produced for various publishers. Then went for 10 years with a SaaS company in the Pest and Lawn Industry. And here we are now, 2024, ready for new challenges!</p>
                <p className='col-sm-3'></p>
            </section>
        </div>
    );
}

export default HomePage;