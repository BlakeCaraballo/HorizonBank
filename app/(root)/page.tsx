import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {

const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user={loggedIn?.name || 'Guest'}
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