import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes} from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import IsPrivate from './components/IsPrivate'
import IsAnon from './components/isAnon'
import ForumPage from './pages/ForumPage'
import GalleryPage from './pages/GalleryPage'
import MarketplacePage from './pages/MarketplacePage'
import AddListing from './pages/AddListing'
import ListingDetails from './pages/ListingDetails'
import Messages from './pages/Messages'
import ForumPostPage from './pages/ForumPostPage'




function App() {


  return (
    <div className="App">
    <Navbar />
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<AddListing />} />




      <Route path="/messages" element={<Messages />} />
      <Route path="/signup" element={<IsAnon><SignupPage /> </IsAnon>} />
      <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      <Route path="/forum" element={<IsPrivate> <ForumPage /> </IsPrivate>} />
      <Route path="/listings/:listingId" element={<IsPrivate> <ListingDetails /> </IsPrivate>} />
      <Route path="/forum/:forumId" element={<IsPrivate> <ForumPostPage /> </IsPrivate>} />
      <Route path="/gallery" element={<IsPrivate> <GalleryPage /> </IsPrivate>} />
      <Route path="/listings" element={<IsPrivate> <MarketplacePage /> </IsPrivate>} />
    </Routes>
    </div>
  )
}

export default App
