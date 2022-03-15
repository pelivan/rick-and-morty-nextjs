import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'


const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

export async function getServerSideProps({query}) {  //function we use to fetch data
  const {id} = query;
  const res = await fetch(`${defaultEndpoint}${id}`)  //request to our endpoint but with ID!
  const data = await res.json(); //method to grab output in JSON format
  return{
    props: {
      data //object as a prop
    }
  }

}

export default function Characters({data}) {

  const {name,image,gender,location,origin,species,status} = data;


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name}
        </h1>

        <div className={styles.profile}>
        <div className={styles.profimg}>
        <img src={image} alt={name} />
        </div>

        <div className={styles.profimg}>
      <h2>About me</h2>
      <ul>
      <li>
        <strong>Name:</strong> { name }
      </li>
      <li>
        <strong>Status:</strong> { status }
      </li>
      <li>
        <strong>Gender:</strong> { gender }
      </li>
      <li>
        <strong>Species:</strong> { species }
      </li>
      <li>
        <strong>Location:</strong> { location?.name }
      </li>
      <li>
        <strong>Originally From:</strong> { origin?.name }
      </li>
      </ul>
    </div>
    </div>
    
    <p className={styles.search}>
      <Link href="/">
    <button >Go home</button>
    </Link>
    </p>

       

 


      </main>

     
    </div>
  )
  
}
