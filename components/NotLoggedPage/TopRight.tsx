
import React,{useEffect , useState , useCallback} from 'react';
import { Flex ,Text,Box} from '@chakra-ui/react';
import News from './TopNewsComponent';
import axios from 'axios';


export default function TopRight({}) {

   const [news , setNews] = useState<any>([]);
  //  const uri = "pub_250901285fc251358a072a42b60c3e9e1ddb5";
  const uri = "27478ca13d044aecb6b83888aa384d5b";
  // const url ="https://newsdata.io/api/1/news?apikey=pub_250901285fc251358a072a42b60c3e9e1ddb5&language=en"
   const getNews = useCallback(async() => {
      
    await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey="+uri)
     .then(({data}) => {

      // FOR RANDOM NUMBERS!
        setNews([data.articles[3], data.articles[7], data.articles[13], data.articles[17]]);

      console.log(data.articles[5]);
     }).catch(() => {
      console.log("Error Occur while fetching news!");
     })



   },[]);

  useEffect(() => {
   
    getNews();  
    
  },[getNews]);

    return(<>
      
<Flex py={2} flexDirection={'column'} gap={2}  >

      {/* TRENDING! */}
    <Text color={'gray.700'} fontSize={'0.871rem'} fontWeight={'600'} fontFamily={'Serif'}>Trending today</Text>

      {/* NEWS! */}
      <Flex gap={2}  w={{base:'98vw',lg:'75.6vw'}} overflow={'auto'} sx={{ '::-webkit-scrollbar':{ display:'none'}}} >

     { news?.length > 0 && (<>
       <News 
        img={news[0]?.urlToImage}
        heading={news[0]?.title?.slice(0,25)}
        text={news[0]?.title?.slice(0,50)}
        communityName={news[0]?.source?.name.replace(' ','')}
        color={'orange'}
        />

      <News 
        img={news[1]?.urlToImage}
        heading={news[1].title.slice(0,25)}
        text={news[1].title.slice(0,50)}
        communityName={news[1].source.name.replace(' ','')}
        color={'red'}
        />
        
       <News 
          img={news[2]?.urlToImage}
          heading={news[2]?.title?.slice(0,25)}
          text={news[2]?.title?.slice(0,50)}
          communityName={news[2]?.source?.name.replace(' ','')}
        color={'blue'}
        />

      <News 
         img={news[3]?.urlToImage}
         heading={news[3]?.title?.slice(0,25)}
         text={news[3]?.title?.slice(0,50)}
         communityName={news[3]?.source?.name.replace(' ','')}
        color={'white'}
        />

     </>)

     }


      </Flex>
    

</Flex>





     </>)
}