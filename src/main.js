import React from 'react'
import Brand from './images/icon-brand-recognition.svg'
import Records from './images/icon-detailed-records.svg'
import Customize from './images/icon-fully-customizable.svg'
import {useState} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import MyButton from './MyButton'

const initialList = []

function Main() {
    const [name, setName] = useState('')
    const [list, setList] = useState(initialList);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleAdd = async () => {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${name}`)
        const {data: {result: {full_short_link: shortLink}}} = res 
        const {data: {result: {original_link: fullLink}}} = res 
        const newList = list.concat({link:fullLink, name:shortLink, id: uuidv4()} );
        setList(newList);
        setName('');
      }

    return (
        <main>
            <section className='form-section'>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                        value= {name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Shorten a link here...'
                    />
                    <button className='btn-shorten' onClick = {handleAdd}>Shorten it!</button>
                </form>
            
                <ul >
                {list.map((item) => <MyButton key={item.id} item={item} />)}
                </ul>
            </section>
            <section className='cards-section'>
                <div className='advanced'>
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='cards'>
                    <div className='card first'>
                        <img src={Brand} alt="" />
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className='card second'>
                        <img src={Records} alt="" />
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className='card third'>
                        <img src={Customize} alt="" />
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </section>
            <section className='boost'>
                <h4>Boost your links today</h4>
                <button className='btn-boost'>Get Started</button>
            </section>
        </main>
    )

}
export default Main