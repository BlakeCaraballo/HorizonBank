import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {

const loggedIn = {firstName: "Blake", 
                  lastName: ' Caraballo', 
                  email: "blakecaraballo1@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transactions effeciently."
        />

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />

        </header>

        recent transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions = {[]}
        banks = {[{currentBalance:123.45}, {currentBalance:123.45}]}
      
      />
    </section>
  )
}

export default Home