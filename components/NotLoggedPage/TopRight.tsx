
import React,{useEffect , useState , useCallback} from 'react';
import { Flex ,Text,Box} from '@chakra-ui/react';
import News from './TopNewsComponent';
import axios from 'axios';


export default function TopRight({}) {

   const [news , setNews] = useState<any>([]);

  const uri ="https://newsdata.io/api/1/news?apikey=pub_25090d802422d28081e5c8bda097cbeb61aff&language=en"
   const getNews = useCallback(async() => {

    
    const apikey = '7d3e001d5a41f939ca40b76f01db8d83';
    const category = 'general';
    const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
    
    fetch(url).then((res:any) => res.json().then((data:any)=>{console.log(data);
      setNews([data.articles[5], data.articles[3], data.articles[9], data.articles[4]]);
    
    }))
      


   },[]);

  useEffect(() => {
   
    getNews();  
    
  },[getNews]);

    return(<>
      
<Flex py={2} flexDirection={'column'} gap={2}  >

      {/* TRENDING! */}
    <Text color={'gray.700'} fontSize={'0.871rem'} fontWeight={'600'} fontFamily={'Serif'}>Trending today</Text>

      {/* NEWS! */}
      <Flex gap={2}  w={{base:'100vw',lg:'75.6vw'}} overflow={'auto'} sx={{ '::-webkit-scrollbar':{ display:'none'}}} >

     { news?.length > 0 && (<>
       <News 
        img={news[0]?.image}
        heading={news[0]?.content?.slice(0,25)}
        text={news[0]?.description?.slice(0,50)}
        communityName={news[0]?.source?.name}
        color={'orange'}
        />

      <News 
        img={news[1]?.image}
        heading={news[1]?.content?.slice(0,25)}
        text={news[1]?.description?.slice(0,50)}
        communityName={news[1]?.source?.name}
        color={'red'}
        />
        
       <News 
          img={news[2]?.image}
          heading={news[2]?.content?.slice(0,25)}
          text={news[2]?.description?.slice(0,50)}
          communityName={news[2]?.source?.name}
        color={'blue'}
        />

      <News 
        img={news[3]?.image}
        heading={news[3]?.content?.slice(0,25)}
        text={news[3]?.description?.slice(0,50)}
        communityName={news[3]?.source?.name}
        color={'white'}
        />

     </>)

     }


      </Flex>
    

</Flex>





     </>)
}