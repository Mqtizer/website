import styled from '@emotion/styled'

import React from 'react'
import { FaqCard } from './faq_card'
import { StaticImage } from 'gatsby-plugin-image'

const faqs = [
  {
    question: '📱 Can I use MQTIZER on multiple devices?',
    answer:
      'Absolutely! MQTIZER is a cross-platform MQTT mobile client, accessible on iPhones, Android phones, tablets, and computers. Stay connected and monitor MQTT data with ease, syncing seamlessly between devices. 🌐',
  },
  {
    question: '🤝 How does MQTIZER enhance collaboration?',
    answer:
      'MQTIZER empowers teamwork through dedicated workspaces. Create and share workspaces with team members, making collaboration on MQTT projects efficient. Invite, approve, and work together seamlessly. Simplify teamwork, managing brokers, templates, and messages. 🚀',
  },
  {
    question: '🎛️ Can I simulate sensor data for demos?',
    answer:
      'Absolutely! MQTIZER features the Sensor Keyboard, enabling effortless simulation of sensor values for demos, presentations, or testing. Customize data with an intuitive interface and create engaging scenarios. Bring life to your demos with MQTIZER! 📊',
  },
  {
    question: '🔧 How does MQTIZER streamline configuration?',
    answer:
      'MQTIZER provides user-friendly interfaces to configure and manage brokers, topics, and messages. Update settings and profiles with just a few clicks. Save time and effort with streamlined configuration, ensuring smooth communication. ⚙️',
  },
  {
    question: '📈 Can MQTIZER handle real-time data monitoring?',
    answer:
      'Absolutely! MQTIZER offers real-time data monitoring, providing instant access to MQTT data from various sources. Keep track of crucial metrics, analyze trends, and receive notifications for critical events. Never miss a beat in your Industry 4.0 journey with MQTIZER! 📊',
  },
  {
    question: '🌟 What makes MQTIZER the ultimate MQTT mobile client?',
    answer:
      'MQTIZER is feature-rich and user-friendly, supporting real-time data monitoring, collaboration, easy data simulation, seamless configuration, and multi-device compatibility - all in one app! Elevate your MQTT communication with unparalleled insights and connectivity. Experience the power of MQTIZER today! 🚀',
  },
]

const SectionTitle = styled.h2`
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.25rem;
`
const SectionSubtitle = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`

export function Faq() {
  return (
    <Section id="faq">
      <StaticImage
        placeholder="blurred"
        quality={100}
        src="../../../images/faq_icon.png"
        alt="Google Play"
        height={72}
      />
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionSubtitle>Have Questions? We are here to help you!</SectionSubtitle>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
      >
        {faqs.map(faq => (
          <FaqCard key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  )
}
