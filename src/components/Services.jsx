import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



import './Services.scss';

export default function Services() {
    return (
        <>
            <section className='services'>
                
                <div className='services-block'>
                    <h1>What are IT services?</h1>
                    <span className='services-block__span'> There are many IT services that can benefit businesses and help them operate smoothly and efficiently. Many of these services allow employees to interact with technology that helps them perform their on-the-job duties or communicate with each other.</span>
                </div>

                <div className='services-accordion'>

                    <div className='accordion-left'>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Cloud services
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Cloud services provide many ways for business team members to interact with the technology they need. The cloud is an internet-connected platform that can store and access information and programs. Since the cloud stores the information instead of holding it on a computer, team members can access and use it whether at home or in the office. Some cloud services can even run operation systems remotely, allowing team members to use internal business programs remotely without installing them on their computers.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Voice over internet protocol (VoIP)
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Voice over internet protocol is a communication tool for businesses. VoIP allows team members to make calls and send messages through their internet connections instead of through a phone line. This helps with internal long-distance communication for businesses that may have offices in different locations. Most VoIP services require paid subscriptions, which businesses can use with traditional phone services or as an alternative.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Backup solutions
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Backup solutions protect information loss from occurring by storing copies of data on external hardware or online platforms, such as a cloud service. Information backup services can help protect your business' information should any issues occur, like a power outage or system failure. Many information backup services exist, such as file backup, server backup and even desktop backup. Businesses can schedule automatic backups for their files to save the most recent versions of the files they create to ensure data is secure.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Network security
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Network security services help protect a business' network from unauthorized access. IT services can create and issue access authorization to those who need it. They also provide many other services to protect your network, including:
                                        <ul className='services-ul'>
                                            <li>Building firewalls</li>
                                            <li>Installing anti-virus software</li>
                                            <li>Installing virtual private networks (VPNs)</li>
                                            <li>Performing regular network checkups</li>
                                        </ul>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>


                    <div className='accordion-right'>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Email services
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Businesses and organizations rely on email for many communication purposes. From individual messages and company-wide updates to customer relations, email is an important part of maintaining business relationships. IT teams may often oversee their businesses' email accounts and make recommendations on providers that suit their organizations' communication needs.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Remote support
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Many IT services can provide technical support remotely. For instance, if one of your devices experiences an issue, IT services can access it through the internet to troubleshoot and repair it. Remote support allows them to find and repair issues more quickly and can apply to multiple devices, including most mobile devices.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Software as a service
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Software as a service (SaaS) refers to software programs that require a paid subscription. This can include word processing or database software. IT services can connect you with the services you need and monitor the connection to help you make sure you can use it when you need it.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Troubleshooting and technical support
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        IT services for many organizations also include technical support and troubleshooting for software applications, programs and online tools. Teams that offer these services often guide users through the process of resolving technical errors or recommend further steps to take, such as sending in the device for repairs.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>

            </section>

        </>
    );
}