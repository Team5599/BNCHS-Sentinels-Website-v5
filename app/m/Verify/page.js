'use client'
import styles from './page.module.css'

import { useState } from 'react';
import { useSearchParams } from 'next/navigation'

import Navbar from '@components/Navbar/Navbar'
import { Button } from '@components/Button/Button'
import Footer from '@components/Footer/Footer'

import { Divider, OrDivider } from '../components/Dividers'

import { Input } from "@/app/components/shadcn/ui/input"
import { Button as ShadButton } from "@/app/components/shadcn/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/components/shadcn/ui/input-otp"
import { Mail } from "lucide-react"



const ICON_Discord = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord">
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
	</svg>
}

const MissingGuildAlert = ({discordAccount}) => {
  return (
    <div
      style={{
        display : 'flex',
        flexDirection : 'column',
        gap : 10,
        padding : 10,
        borderRadius : 4,
        border : '2px solid #ff0',
        backgroundColor : '#ffff0060',
        color : '#fff',
        fontSize : 14,
        maxWidth : 320,
        textAlign : 'center',
        whiteSpace: 'wrap'
      }}
    >
      <span>
        Your discord account {discordAccount} is not a member of The BNCHS Sentinels - Team 5599 Discord Server.
      </span>
      <span>
        Please reach out to a board member or mentor to get a discord invite.
      </span>
      <span>
        If you think this is a mistake, please disconnect and sign in to your discord account again.
      </span>
    </div>
  )
}


export default function Register() {

  const searchParams = useSearchParams()
  
  const email = searchParams.get('email'); // email
  const type = searchParams.get('type');
  /*
    0 - User came from the /Register page
    1 - User came from an email or was redirected from the /SignIn page
  */
  const code = searchParams.get('code');

  const [isEmailVerified, setEmailVerified] = useState(false)
  const [isDiscordConnected, setDiscordConnected] = useState(true)

	return (
		<div>
			<Navbar/>
			<div
				style={{
					width : '100%',
					minHeight : '100dvh',
          height : '100%',
					display : 'flex',
					justifyContent : 'center',
					alignItems : 'center',
					backgroundImage : 'url("../images/splash/background-1.jpg")',
					backgroundSize : 'cover',
					paddingBottom : 40,
					marginBottom : -60
				}}
			>
				<div
					style={{
						padding : 40,
						paddingTop : 40,
						backgroundColor : '#0f1725',
						minWidth : 380,
						minHeight : 320,
            display : 'flex',
								flexDirection : 'column',
								alignItems : 'center',
								gap : 20
					}}
				>
          <span
            style={{
              fontSize : 22,
              color : '#fff',
              fontWeight : 'bold'
            }}
          >
            Team Verification
          </span>
          <Divider/>
          <div style={{color : '#fff', width : '100%', fontWeight : 'bold'}}>
            <span style={{fontSize : 20}}>
              1.{' '}
            </span>
            <span>
              Email Verification
            </span>
          </div>
          {
            (isEmailVerified) ?
            <span
              className='text-muted'
              style={{
                fontSize : 12,
                textWrap : 'wrap',
                width : 280,
                textAlign : 'center'
              }}
            >
              Your email <b>EMAIL ADDRESS</b> is verified!
            </span> :
            <div
              style={{
                display : 'flex',
                flexDirection : 'column',
                gap : 10
              }}
            >
              <span
                className='text-muted'
                style={{
                  fontSize : 12,
                  textWrap : 'wrap',
                  width : 280,
                  textAlign : 'center'
                }}
              >
                An email was sent to <b>EMAIL ADDRESS</b> with a verification code. Please input the code from that email here.
              </span>
              <div
                style={{
                  display : 'flex',
                  gap : 10
                }}
              >
                <InputOTP maxLength={4}>
                  <InputOTPGroup className="dark">
                    <InputOTPSlot style={{color : '#fff'}} index={0} />
                    <InputOTPSlot style={{color : '#fff'}} index={1} />
                    <InputOTPSlot style={{color : '#fff'}} index={2} />
                    <InputOTPSlot style={{color : '#fff'}} index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <ShadButton><Mail /> Resend</ShadButton>
              </div>
            </div>
          }
          
          <Divider/>
          <div style={{color : '#fff', width : '100%', fontWeight : 'bold'}}>
            <span style={{fontSize : 20}}>
              2.{' '}
            </span>
            <span>
              Discord Verification
            </span>
          </div>
          <span
            className='text-muted'
            style={{
                fontSize : 12,
                textWrap : 'wrap',
                width : 280,
                textAlign : 'center'
              }}
            >
            Sign in to your Discord account to verify that you are a member of the team, <b>or</b> enter a registration bypass code if you were given one.
          </span>
          <Button
            className={styles.button}
            style={{
              backgroundColor : '#5865f2',
              '--hoverBackgroundColor' : '#5865f2',
              whiteSpace : 'nowrap',
            }}
            disabled
          >
            <div
              style={{
                paddingLeft : 10,
                paddingRight : 10,
                gap : 10,
                display : 'flex',
                flexDirection : 'row',
                justifyContent : 'space-between',
                alignItems : 'center'
              }}
            >
              <ICON_Discord/>
              <span style={{textTransform : 'initial'}}>
                Connect to Discord
              </span>
            </div>
          </Button>
          {
            (isDiscordConnected) && 
            <div
              style={{
                display : 'flex',
                gap : 10,
                flexDirection : 'row',
                backgroundColor : '#00000090',
                padding : 15,
                width : '100%',
                marginLeft : -5,
                marginRight : -5,
                borderRadius : 4
              }}
            >
              <div
                style={{
                  width : 42,
                  height : 42,
                  borderRadius : 42,
                  backgroundColor : '#fff'
                }}
              />
              <div
                style={{flex : 1, flexGrow : 1, display : 'flex', flexDirection : 'column'}}
              >
                <span
                  style={{
                    fontSize : 14,
                    color : '#fff'
                  }}
                >
                  Username#0000
                </span>
                <a
                  style={{
                    fontSize : 12,
                    color : 'red'
                  }}
                >
                  Disconnect
                </a>
              </div>
            </div>
          }
          <MissingGuildAlert discordAccount={""}/>
          <OrDivider/>
          <Input type="text" placeholder="Registration Bypass Code" className="dark" style={{height : 44, color : '#fff'}}/>
          <Divider/>
          <Button
            className={styles.button}
            disabled={true}
            style={{
              color: '#000',
              backgroundColor : '#fff',
              '--hoverBackgroundColor' : '#ddd',
              whiteSpace : 'nowrap',
              textTransform : 'initial'
            }}
          >
            <span
              style={{
                paddingLeft : 50,
                paddingRight : 50
              }}
            >
              Finish
            </span>
          </Button>
        </div>
			</div>
			<Footer/>
		</div>
	)
}
