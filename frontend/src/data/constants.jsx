import { TruckIcon,UserGroupIcon,CodeBracketIcon,ClockIcon, } from '@heroicons/react/24/outline'
import { CommandLineIcon, DevicePhoneMobileIcon, GlobeAltIcon, DocumentMagnifyingGlassIcon, FilmIcon, WrenchScrewdriverIcon, LightBulbIcon, ChartBarIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'


const HERO={
    pre_wordlist_text:'We can do',
    wordlist:'App Development|Web Design|Website Development|Software Development|UI/UX design|Digital marketing|Custom Software Solutions|and many more',
    post_wordlist_text:'for all your business needs.',
    subtext:'Expose you business globally with our well built apps,websites and softwares.',
    button_text:'Work with us',
}


const ACHIEVEMENTS=[
    {
        stat_text:'100+',
        stat_subtitle:'Projects Delivered',
        stat_icon_code:<TruckIcon className='w-12 h-12 mb-3 inline-block group-hover:text-emerald-700 dark:group-hover:text-green-400' />
    },
    {
        stat_text:'50+',
        stat_subtitle:'Active Clients',
        stat_icon_code:<UserGroupIcon className='w-12 h-12 mb-3 inline-block group-hover:text-blue-500'/>
    },
    {
        stat_text:'20+',
        stat_subtitle:'Team Members',
        stat_icon_code:<CodeBracketIcon className='w-12 h-12 mb-3 inline-block group-hover:text-violet-500'/>
    },
    {
        stat_text:'3+',
        stat_subtitle:'Years Occupied',
        stat_icon_code:<ClockIcon className='w-12 h-12 mb-3 inline-block group-hover:text-red-400' />
    }

]


const SERVICES=[
    {
        title:'Software Development',
        desc:'Well-built, user-friendly, and most powerful software for your business problems.',
        icon:<CommandLineIcon className='w-8 h-8 group-hover:text-orange-400 dark:group-hover:text-orange-700' />,
    },
    {
        title:'App Development',
        desc:'Easy to use, high security and high performance android and ios applications.',
        icon:<DevicePhoneMobileIcon className='w-8 h-8 group-hover:text-blue-400 dark:group-hover:text-blue-700' />
    },
    {
        title:'Web Development',
        desc:'Smooth, effective, error-free, cloud-based web applications and portals.',
        icon:<GlobeAltIcon className='w-8 h-8 group-hover:text-green-500 dark:group-hover:text-green-700' />
    },
    {
        title:'SEO',
        desc:'Top page rank and visibility, increase quality traffic, cost-effective, and target audience.',
        icon:<DocumentMagnifyingGlassIcon className='w-8 h-8 group-hover:text-orange-400 dark:group-hover:text-orange-600' />
    },
    {
        title:'Graphics Designing',
        desc:'Creative, eye-catching, easy to use, unique, expressive, and appealing design.',
        icon:<FilmIcon className='w-8 h-8 group-hover:text-purple-400 dark:group-hover:text-purple-700' />
    },
    {
        title:'Support & Maintenance',
        desc:'Online/offline support, maintaining data safety, fixing bugs and regular update.',
        icon:<WrenchScrewdriverIcon className='w-8 h-8 group-hover:text-indigo-400 dark:group-hover:text-indigo-700' />
    },
    {
        title:'Invest on Unique Idea',
        desc:'Have an idea that can change the future, but no capital? No Worries, collaborate with Brosoft and make it large.',
        icon:<LightBulbIcon className='w-8 h-8 group-hover:text-yellow-500 dark:group-hover:text-yellow-600' />
    },
    {
        title:'Data Analysis',
        desc:'Understanding of an organization or individual and helps them to make better decisions.',
        icon:<ChartBarIcon className='w-8 h-8 group-hover:text-emerald-400 dark:group-hover:text-emerald-700' />
    },
    {
        title:'IT Consulting',
        desc:'Easy consulting, strategy, planning, risk recovery, focus on core business and fulfilling demand.',
        icon:<ChatBubbleLeftEllipsisIcon className='w-8 h-8 group-hover:text-red-400 dark:group-hover:text-red-600' />
    }
]

const CONTACT_INFO={
    phone:'+977-056-530417',
    email:'contact@brosoftltd.com',
    address:'Bharatpur,Chitwan',
    map_url:'https://goo.gl/maps/ASETJhRRg5GzChG27',
    nepal_wapp:'+977 9845468646',
    uk_address:'London, SE9 4BU ',
    uk_email:'uk@brosoftltd.com',
    uk_gmap_url:''
}

const ABOUT_HERO={
    title_1:'Who we are?',
    content_1:'BroSoft is a software development company established in 2019 in Chitwan, Nepal. BroSoft is a mix of 2 words “Bro and Soft” Bro abbreviation for Brother/Brotherhood and Soft abbreviation Software. 2 real brothers work together with the mission of solving real-world problems and create BroSoft.',
    title_2:'What we do?',
    content_2:'For the last 3 years, we have offered world-class IT consulting, software development, app development, testing, digital marketing, and user interface design services. We execute high technical projects on time, within scope and at a lower cost.',
    title_3:'Why choose us?',
    content_3:'Brosoft has a team of experienced person, which helps to create solutions for a wide range of platforms including iOS, Android, Web Apps and many more with features such as reliability, cost-effective, high security, high performance, latest technology, world-class services, user-friendly, most powerful, easy to use, etc.',

}

const INDUSTRIES=[
    {
        icon:'fa fa-dumbbell fa-xl group-hover:text-green-500 group-hover:dark:text-green-400',
        text:'Health and Fitness'
    },
    {
        icon:'fa fa-book fa-xl group-hover:text-orange-500 group-hover:dark:text-orange-400',
        text:'Education and E-Learning'
    },
    {
        icon:'fa fa-plane-departure fa-xl group-hover:text-blue-500 group-hover:dark:text-blue-400',
        text:'Travel and Hospitality'
    },
    {
        icon:'fa fa-building fa-xl group-hover:text-red-500 group-hover:dark:text-red-400',
        text:'Real-Estate'
    },
    {
        icon:'fa fa-utensils fa-xl group-hover:text-blue-500 group-hover:dark:text-blue-400',
        text:'Restaurants and Food'
    },
    {
        icon:'fa fa-network-wired fa-xl group-hover:text-rose-500 group-hover:dark:text-rose-400',
        text:'Social Networking'
    },
    {
        icon:'fa fa-gamepad fa-xl group-hover:text-purple-500 group-hover:dark:text-purple-400',
        text:'Games and Entertainment'
    },    
    {
        icon:'fa fa-cart-shopping fa-xl group-hover:text-amber-500 group-hover:dark:text-amber-400',
        text:'E-Commerce and Retail'
    },
    {
        icon:'fa fa-wrench fa-xl group-hover:text-indigo-500 group-hover:dark:text-indigo-400',
        text:'On Demand Solutions'
    }
]

const WORK_STEPS = [
    {
        title: 'Research',
        icon: 'fa fa-lightbulb fa-xl group-hover:text-amber-500',
    },
    {
        title: 'Design',
        icon: 'fa fa-pen-ruler fa-lg group-hover:text-purple-500',
    },
    {
        title: 'Prototype',
        icon: 'fa fa-gears fa-xl group-hover:text-blue-500',
    },
    {
        title: 'Develop',
        icon: 'fa fa-code fa-lg group-hover:text-indigo-500',
    },
    {
        title: 'Quality Assurance',
        icon: 'fa fa-circle-check fa-lg group-hover:text-teal-400',
    },
    {
        title: 'Deploy',
        icon: 'fa fa-rocket fa-lg group-hover:text-emerald-500 ',
    },
    {
        title: 'Support & Maintainence',
        icon: 'fa fa-headset fa-lg group-hover:text-sky-500 ',
    }

]

const TEAM_MEMBERS=[
    {
        image:'https://brosoftltd.com/media/index/gallery/Group_1369_LcSCCBf.png',
        name:'Bishwas Kharel',
        role:'Chief Executive Officer (CEO)'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/Bikash.png',
        name:'Bikash Kharel',
        role:'Chief Technology Officer (CTO)'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/hem.png',
        name:'Hem Nath Uprety',
        role:'Lead App Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/ramji.png',
        name:'Ramji Subedi',
        role:'Senior Web Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/ujjwal.png',
        name:'Ujjwal Silwal',
        role:'Lead Cross Platform'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/prakash.png',
        name:'Prakash Maharjan',
        role:'Senior iOS Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/sagar.png',
        name:'Sagar Bartaula',
        role:'Senior Developer  '
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/Group_1381.png',
        name:'Saurav Adhikari',
        role:'Flutter Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/shobhit_1.png',
        name:'Shobhit Paudel',
        role:'Flutter Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/Bikash_Gurung_1.png',
        name:'Bikash Gurung',
        role:'Android Developer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/Girija.png',
        name:'Girija Kandel',
        role:'QA Engineer'
    },
    {
        image:'https://brosoftltd.com/media/index/gallery/Kanchan.png',
        name:'Kanchan Sapkota',
        role:'Senior Python Developer'
    }

]


const JOURNEY=[
    {
        date:new Date("2018-01-01"),
        title:'Company Established',
        desc:'Brosoft Pvt ltd was born in the year 2018 with the mission of solving real-world problems.'
    },
    {
        date:new Date("2019-01-01"),
        title:'Collaboration with Daali Limited',
        desc:'Daali limited is a UK-based startup company that collects reward point through open banking. We collaborate for entire IT work.'
    },
    {
        date:new Date("2020-01-01"),
        title:'New Office Setup',
        desc:'With the start of this year, we moved to new modern premises with more positive energy that offers the best working environment.'
    },
    {
        date:new Date("2021-01-01"),
        title:'Completed Milestone of 100+ Project',
        desc:'We recruited more skilled employees, and as far as app and web development is concerned the company successfully completed 100+ projects with a 100% ratio of success.'
    },
    {
        date:new Date("2022-01-01"),
        title:'Lunching Own Project MeroVidya',
        desc:'After completing the milestone of 100+ projects we realize we should also have our own project, so we started Mero Vidya. Mero Vidya is a school/college management software with an e-learning platform available in web and mobile app.'
    }

]

const PROJECTS=[
    {
        banner:'https://brosoftltd.com/media/index/client/back_image/daali-thumbnail.png',
        logo:'https://brosoftltd.com/media/index/client/Daali_logo.png',
        projectLink:'http://mydaali.com',
        title:'Daali',
        subtitle:'Reward Wallet',
        desc:'Daali is a digital wallet which is used to collect rewards. Daali rewards customers for their usual shopping from big brands to local business. We use open banking to automate loyalty, bring you the best deals and collect rewards automatically. What open banking has done is placed the control of your banking data on your hands. You can choose to make the best use of it to benefit you and we will help you do it.',
        techIcons:[
            "devicon-xd-plain       text-3xl",
            "devicon-php-plain      text-5xl",
            "devicon-swift-plain    text-3xl",
            "devicon-kotlin-plain   text-3xl",
            "devicon-firebase-plain text-4xl"
        ]
    },
    {
        banner:'https://brosoftltd.com/media/index/client/back_image/Mero_Vidya_Thumbnail_image_IIvLEua_EfcizI7.png',
        logo:'https://brosoftltd.com/media/index/client/mero_vidya_logo_KUOAIoz_8nCoI6R.png',
        projectLink:'Mero Vidya',
        title:'Mero Vidya',
        subtitle:'School/College Management System',
        desc:'Mero Vidya is an advanced cloud-based ERP system. A complete school/college management system that simplifies & automates the day-to-day academic & administrative activities. It helps to manage admission, staff, student, parents, account, exam, library, hostel, vehicle, payroll, staff/teacher activities, etc. Apart from school management, Mero Vidya also provides an E-Learning platform that includes online video classes, online exams, online library, online homework, online homework submission, online result publication and other related features. Acceptable for any educational institute, Montessori, school, college & university.',
        techIcons:[
            'devicon-flutter-plain text-3xl',
            'devicon-figma-plain      text-3xl',
            'devicon-django-plain     text-3xl',
            'devicon-python-plain     text-3xl',
            'devicon-firebase-plain  text-3xl',
        ]
    },

]

const JOBS=[
    {
    "job_intro": "Participate in the engineering aspect of a professional software development process\r\n    Collaborate with different teams to build software that fits the vision and a more holistic purpose\r\n    Work closely with product management to implement new features\r\n    Advocate for the application’s performance and quality\r\n    Contribute to technical discussions and communicate your ideas clearly\r\n    Address complex problems and stay open to debates and brainstorming sessions\r\n    Work closely with the engineering team to plan and prioritize tasks",
    "job_level": "Associate Developer",
    "job_roles": "Participate in the engineering aspect of a professional software development process\r\n    Collaborate with different teams to build software that fits the vision and a more holistic purpose\r\n    Work closely with product management to implement new features\r\n    Advocate for the application’s performance and quality\r\n    Contribute to technical discussions and communicate your ideas clearly\r\n    Address complex problems and stay open to debates and brainstorming sessions\r\n    Work closely with the engineering team to plan and prioritize tasks",
    "job_type": "Full-Time",
    "keywords": "django , python , django-rest , api",
    "location": "Lanku, Bharatpur, Chitwan",
    "minimum_qualification": "Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)\r\n    At least 3+ years of relevant development experience with Python/Django\r\n    Solid expertise in MySQL\r\n    Strong communication skills and experience in SQL\r\n    Competency in multi-database configurations with Django is desirable\r\n    Proficiency in Redshift is nice to have\r\n    An ability to adapt to changing situations and technologies",
    "open_positions": 1,
    "remote_eligible": true,
    "salary": "Negotiable",
    "title": "Python Developer - Django ",
    "deadline": "2023-03-02 12:00:00.000Z"
    }
]


export {
    HERO,
    ACHIEVEMENTS,
    SERVICES,
    CONTACT_INFO,
    ABOUT_HERO,
    INDUSTRIES,
    WORK_STEPS,
    TEAM_MEMBERS,
    JOURNEY,
    PROJECTS,
    JOBS,
}