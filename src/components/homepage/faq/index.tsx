import styled from '@emotion/styled'

import React from 'react'
import { FaqCard } from './faq_card'
import { StaticImage } from 'gatsby-plugin-image'

const faqs = [
  {
    question: '📱 Can I use MQTIZER on multiple devices?',
    answer:
      'Yes, absolutely! MQTIZER is designed to be a cross-platform MQTT mobile client. You can access it on your iPhone, Android phone, tablet, or computer. The app seamlessly syncs data between devices, allowing you to stay connected and monitor MQTT data from anywhere with ease. 🌐',
  },
  {
    question: '🚀 How can MQTIZER enhance collaboration?',
    answer:
      'MQTIZER empowers collaboration through dedicated workspaces. You can create and share workspaces with team members, enabling seamless collaboration on MQTT projects. Invite, approve, and work together efficiently. MQTIZER simplifies teamwork, making it easier to manage brokers, templates, and messages. 🤝',
  },
  {
    question: '🎛️ Can I simulate sensor data for demos?',
    answer:
      'Absolutely! MQTIZER comes equipped with the Sensor Keyboard feature. You can effortlessly simulate sensor values for your demos, presentations, or testing purposes. The intuitive interface lets you customize data and create engaging scenarios. Bring life to your demos with MQTIZER! 📊',
  },
  {
    question: '🔧 How does MQTIZER streamline configuration?',
    answer:
      'MQTIZER provides user-friendly interfaces for configuring and managing brokers, topics, and messages. With just a few clicks, you can update settings and profiles. MQTIZER simplifies configuration management, saving you time and effort while ensuring smooth communication. ⚙️',
  },
  {
    question: '📈 Can MQTIZER handle real-time data monitoring?',
    answer:
      'Absolutely! MQTIZER offers real-time data monitoring, giving you instant access to MQTT data from various sources. Keep track of crucial metrics, analyze trends, and receive notifications for critical events. MQTIZER ensures you never miss a beat in your IoT journey! 📊',
  },
  {
    question: '🌟 What makes MQTIZER the ultimate MQTT mobile client?',
    answer:
      'MQTIZER stands out with its feature-rich design and user-friendly experience. Real-time data monitoring, collaboration support, easy data simulation, seamless configuration, and multi-device compatibility - all packed into one app! MQTIZER elevates your MQTT communication, empowering you with unparalleled insights and connectivity. Experience the power of MQTIZER today! 🚀',
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
  width: 100%;
`

export function Faq() {
  return (
    <Section>
      <StaticImage quality={100} src="../../../images/faq_icon.svg" alt="Google Play" height={72} />
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionSubtitle>Have Questions? We are here to help you!</SectionSubtitle>
      <br />

      <div
        style={{
          width: '100%',
        }}
      >
        {faqs.map(faq => (
          <FaqCard question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  )
}
