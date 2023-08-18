import PropTypes from 'prop-types'
import ServicesSelector from '../ServicesSelector/ServicesSelector'
import Contact from '@components/Contact'
import Carousel from '../Carousel/Carousel'
import FeaturedInsights from '@components/FeaturedInsights'
import InsightsTwoLargeItems from '@components/InsightsTwoLargeItems'
import ContentBlock from '@components/ContentBlock'
import OurFirm from '@components/OurFirm'
import OurPeople from '@components/OurPeople'
import InsightsGrid from '@components/InsightsGrid'
import ExpertsGrid from '@components/ExpertsGrid'
import Insights from '@components/Insights'

const Snippet = props => {
  console.log(props)
  if (props.componentType === 'Services Selector') {
    return props && <ServicesSelector {...props} />
  }

  if (props.componentType === 'Contact Form') {
    return props && <Contact {...props} />
  }

  if (props.componentType === 'Experts Highlight') {
    return props && <Carousel {...props} />
  }

  if (props.componentType === 'Featured Insights') {
    return <FeaturedInsights {...props} />
  }

  if (props.componentType === 'Insights Two Large Items') {
    return <InsightsTwoLargeItems {...props} />
  }

  if (props.componentType === 'Services Landing Content Block') {
    return <ContentBlock {...props} />
  }

  if (props.componentType === 'Our People') {
    return <OurPeople {...props} />
  }

  if (props.componentType === 'Our Firm') {
    return <OurFirm {...props} />
  }

  if (props.componentType === 'Insights Grid') {
    return <InsightsGrid {...props} />
  }
  if (props.componentType === 'Insights') {
    return <Insights {...props} />
  }
  if (props.componentType === 'Experts Grid') {
    return <ExpertsGrid {...props} />
  }
  return null
}

Snippet.propTypes = {
  componentType: PropTypes.string
}

export default Snippet
