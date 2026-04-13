import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import ScrollWrapper from "./components/ScrollWrapper";
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import TechnicalConcepts from './pages/TechnicalConcepts/TechnicalConcepts.jsx'
import Kubernetes from './pages/Kubernetes/Kubernetes.jsx'
import AIGuide from './pages/AIGuide/AIGuide.jsx'
import Ansible from './pages/Ansible/Ansible.jsx'
import AWS from './pages/AWS/AWS.jsx'
import VMWare from './pages/VMWare/VMWare.jsx'
import GitHub from './pages/GitHub/GitHub.jsx'
import Docker from './pages/Docker/Docker.jsx'
import Jenkins from './pages/Jenkins/Jenkins.jsx'
import InterviewQuestions from './pages/InterviewQuestions/InterviewQuestions.jsx'
import Linux from './pages/InterviewQuestions/LinuxIntQsns.jsx'
import CCIDIntQsns from './pages/InterviewQuestions/CICDIntQsns.jsx'
import DevOpsIntQsns from './pages/InterviewQuestions/DevOpsIntQsns.jsx'
import JenkinsIntQsns from './pages/InterviewQuestions/JenkinsIntQsns.jsx'
import Miscellaneous from './pages/InterviewQuestions/Miscellaneous.jsx'
import ConceptPage from './pages/ConceptPage/ConceptPage.jsx'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions.jsx'
import Footer from './components/Footer/Footer.jsx'
import Azure from './pages/Azure/Azure.jsx'
import Cloud from './pages/Cloud/Cloud.jsx'
import OpenShift from './pages/OpenShift/OpenShift.jsx'
import GCP from './pages/GCP/GCP.jsx'
import MigrationConcepts from './pages/MigrationConcepts/MigrationConcepts.jsx'
import Terraform from './pages/Terraform/Terraform.jsx'
import RefArticles from './pages/RefArticles/RefArticles.jsx'
import DevOpsCmds from './pages/InterviewQuestions/DevOpsCmds.jsx'

function App() {

  // ✅ ADD THIS BLOCK
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <Routes>
  <Route path="/" element={<ScrollWrapper><Home /></ScrollWrapper>} />
  <Route path="/about-me" element={<ScrollWrapper><AboutMe /></ScrollWrapper>} />
  <Route path="/contact-us" element={<ScrollWrapper><ContactUs /></ScrollWrapper>} />
  <Route path="/technical-concepts" element={<ScrollWrapper><TechnicalConcepts /></ScrollWrapper>} />
  <Route path="/kubernetes" element={<ScrollWrapper><Kubernetes /></ScrollWrapper>} />
  <Route path="/ai-guide" element={<ScrollWrapper><AIGuide /></ScrollWrapper>} />
  <Route path="/ansible" element={<ScrollWrapper><Ansible /></ScrollWrapper>} />
  <Route path="/aws" element={<ScrollWrapper><AWS /></ScrollWrapper>} />
  <Route path="/azure" element={<ScrollWrapper><Azure /></ScrollWrapper>} />
  <Route path="/vmware" element={<ScrollWrapper><VMWare /></ScrollWrapper>} />
  <Route path="/docker" element={<ScrollWrapper><Docker /></ScrollWrapper>} />
  <Route path="/github" element={<ScrollWrapper><GitHub /></ScrollWrapper>} />
  <Route path="/jenkins" element={<ScrollWrapper><Jenkins /></ScrollWrapper>} />
  <Route path="/terraform" element={<ScrollWrapper><Terraform /></ScrollWrapper>} />
  <Route path="/gcp" element={<ScrollWrapper><GCP /></ScrollWrapper>} />
  <Route path="/openshift" element={<ScrollWrapper><OpenShift /></ScrollWrapper>} />
  <Route path="/migration-concepts" element={<ScrollWrapper><MigrationConcepts /></ScrollWrapper>} />
  <Route path="/reference-articles" element={<ScrollWrapper><RefArticles /></ScrollWrapper>} />
  <Route path="/cloud" element={<ScrollWrapper><Cloud /></ScrollWrapper>} />
</Routes>

      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App