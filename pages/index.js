import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if(session){
    return (
      <>
        <Head>
          <title>LN next-js App</title>
          <meta name="description" content="Next LN " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="flex min-h-screen flex-col p-2">
          <div>
              <Image src="/logo-nueng1.png" alt="" width={50} height={50}/>
          </div>
          <div>
            Signed in as {session.user.email} 
                <Avatar alt={session.user.email} src={session.user.avatar} />
            <button onClick={() => signOut()}>Sign out</button> <br />
            <Navbar />
              <h1>Welcome to WOrld LN</h1>
            <Footer/>
          </div>
        </main>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>LN next-js App</title>
          <meta name="description" content="Next LN " />
        </Head>
        <main className="flex min-h-screen flex-col p-2">
          <div>
              <Image src="/logo-nueng1.png" alt="" width={50} height={50}/>
          </div>
          <div>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
            <Navbar />
              <h1>Welcome to WOrld LN</h1>
            <Footer/>
          </div>
        </main>
      </>
    )
  }
}
