import React, { useEffect } from 'react'
import { Feature, OptForm } from '../components'
import { FaqsContainer } from '../containers/faqs'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'

export default function Home() {
  useEffect(() => {
    alert(
      ' Login Information:\n\nUsername: test@gmail.com\nPassword: test123\n'
    )
  }, [])
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at anytime.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to learn more about membership!
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
