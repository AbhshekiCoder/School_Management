

import 'rsuite/dist/rsuite.min.css';
import {Message, Loader} from 'rsuite';
import { useEffect } from 'react';
import wave_hand from '../Assets/waving-hand.svg';
import trending_img from '../Assets/Screenshot_27-7-2024_122136_internshala.com.jpeg';
import java from '../Assets/java.png';
import react from '../Assets//react.png';
import persoinality_devlopment from '../Assets/personality devlopment.jpeg';
import bussiness_training from '../Assets/bussiness training.jpeg';

import project from '../Assets/projectm.jpeg';
import finanancle from '../Assets/financwle busjjd.jpeg';
import webdevlopment from '../Assets/web devlopment.jpeg';
import '../style.css/Home.css';
import {SwiperSlide, Swiper} from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';




function Home(){
    useEffect(()=>{
        document.querySelector('.btn').style.display = "block";
        document.getElementById('navbar').style.display = "block";
        document.querySelector('.sidebar').style.display = "block";
            
    },[])

    function Search(e){
        let data = e.target.value;
      let title =   data.toUpperCase();
      let result = axios.post('http://localhost:5000/search', {title}).then(result =>{
        console.log(result.data);
      })

    }

    
    
    
  
    return(
        <>
        <div className='w-full h-full' style={{backgroundColor: "#e3fafa"}}>
        <div className='modal w-44 h-16 btn z-10'>
             <button  className='flex  justify-around w-full h-full text-white items-center'><i class="fa-solid fa-headset"></i><div>Support</div><i class="fa-solid fa-angle-up"></i></button>

        </div>
       
        <div className=' pl-40 max-[786px]:pl-0 mt-3'>
        <div className=' max-w-6xl m-auto mt-36  '>
        <div class = "ads-modal max-w-6xl m-auto ">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner max-w-6xl  h-96">
                  <div class="carousel-slider_item active  object-cover">
                   <img src ={persoinality_devlopment}  class = "d-block w-100 object-cover"/>
                       
                  </div>
                  <div class="carousel-slider_item  object-cover">
                    <img src={project} class="d-block w-100  object-cover" alt="..."/>
                  </div>
                  <div class="carousel-slider_item  object-cover">
                    <img src= {webdevlopment} class="d-block w-100 " alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

        </div>

        <div className='search max-w-96 mt-9  h-10 flex bg-gray-100 border'>
        <input type='text'  placeholder='search like butterfly' className='w-full  h-full bg-gray-100' onChange = {Search}/><i class="fa-solid fa-magnifying-glass flex items-center text-2xl  p-2 "></i>

        </div>

        <div className='mt-3'>
        <div className='flex w-fit m-auto '>
        <div className='flex'>
        <p className='text-2xl font-bold'>Trending on Edureta</p> <img src = {trending_img} className='ml-3' style={{backgroundColor: "#e3fafa"}}/> 

        </div>
          
        

        </div>
       
        

        </div>

        <Swiper className='swiper  mt-3 max-[786px]:hidden pb-9 ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={3} spaceBetween={30} >
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {java}/>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {react}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {bussiness_training}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {persoinality_devlopment}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {finanancle}/>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='slider_item   h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {project}/>
        </div>

        </SwiperSlide>
       
       
       

      
        </Swiper>
        <Swiper className='swiper hidden mt-3 max-[786px]:block ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
        <SwiperSlide>
        <div className='slider_item h-64  ' >
            <img  className='w-full h-full  rounded-2xl' src = {java}/>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='slider_item  h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {react}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item  h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {bussiness_training}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item  h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {persoinality_devlopment}/>
        </div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className='slider_item  h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {finanancle}/>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='slider_item  h-64'>
            <img  className='w-full h-full  rounded-2xl' src = {project}/>
        </div>

        </SwiperSlide>
       
       
       

      
        </Swiper>

      

      


        </div>

        </div>

       

        </div>
          
       
       
        

          
        </>
    )
}
export default Home;