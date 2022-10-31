import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({date}) {
  return (
    <div >
      {date}
    </div>
  )
}

export async function getServerSideProps(){

    function toIsoString(date) {
      var tzo = -date.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function(num) {
              return (num < 10 ? '0' : '') + num;
          };
  
      return date.getFullYear() +
          '-' + pad(date.getMonth() + 1) +
          '-' + pad(date.getDate()) +
          'T' + pad(date.getHours()) +
          ':' + pad(date.getMinutes()) +
          ':' + pad(date.getSeconds()) +
          dif + pad(Math.floor(Math.abs(tzo) / 60)) +
          ':' + pad(Math.abs(tzo) % 60);
    }
  
    var dt = new Date();
    return { props: { date: toIsoString(dt)} }

  }

// export async function getStaticPaths() {
//   const paths = data.map(date => {
//     return {params: {id: date}}
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }