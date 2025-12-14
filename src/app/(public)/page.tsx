import FreshVegetables from '@/components/pages/home/FreshVegetables'
import PromotionBanner from '@/components/pages/home/PromotionBanner'
import TodayHotSale from '@/components/pages/home/TodayHotSale'
import React from 'react'

const HomePage = () => {
    return (
        <section>
            <PromotionBanner />
            <TodayHotSale />
            <FreshVegetables />
        </section>
    )
}

export default HomePage