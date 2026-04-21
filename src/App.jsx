// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

// Pages
import Home from './pages/Home'
import InspiringGreatness from './pages/InspiringGreatness'
import Provenance from './pages/Provenance'
import ShowroomPage from './pages/Models/ShowroomPage'
import BespokeDiscover from './pages/Bespoke/BespokeDiscover'
import BespokeInspiration from './pages/Bespoke/BespokeInspiration'
import BespokeCraft from './pages/Bespoke/BespokeCraft'
import BespokeObjects from './pages/Bespoke/BespokeObjects'
import CoachbuildCollection from './pages/Bespoke/CoachbuildCollection'
import ProjectNightingale from './pages/Bespoke/ProjectNightingale'
import CoachbuildDetail from './pages/Bespoke/CoachbuildDetail'
import OwnersLounge from './pages/Ownership/OwnersLounge'
import YourMotorCar from './pages/Ownership/YourMotorCar'
import Whispers from './pages/Ownership/Whispers'
import Charging from './pages/Ownership/Charging'
import Muse from './pages/Muse/Muse'
import DreamCommission from './pages/Muse/DreamCommission'
import SpiritOfEcstasyChallenge from './pages/Muse/SpiritOfEcstasyChallenge'
import MuseStories from './pages/Muse/MuseStories'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inspiring-greatness" element={<InspiringGreatness />} />
        <Route path="provenance" element={<Provenance />} />
        
        {/* Models Routes */}
        <Route path="showroom/phantom" element={<ShowroomPage model="Phantom" />} />
        <Route path="showroom/phantom-extended" element={<ShowroomPage model="Phantom Extended" />} />
        <Route path="showroom/spectre" element={<ShowroomPage model="Spectre" />} />
        <Route path="showroom/ghost" element={<ShowroomPage model="Ghost" />} />
        <Route path="showroom/ghost-extended" element={<ShowroomPage model="Ghost Extended" />} />
        <Route path="showroom/cullinan" element={<ShowroomPage model="Cullinan" />} />
        <Route path="showroom/black-badge" element={<ShowroomPage model="Black Badge" />} />
        
        {/* Bespoke Routes */}
        <Route path="bespoke/discover" element={<BespokeDiscover />} />
        <Route path="bespoke/inspiration" element={<BespokeInspiration />} />
        <Route path="bespoke/craft" element={<BespokeCraft />} />
        <Route path="bespoke/objects-of-luxury" element={<BespokeObjects />} />
        <Route path="bespoke/coachbuild-collection" element={<CoachbuildCollection />} />
        <Route path="bespoke/project-nightingale" element={<ProjectNightingale />} />
        <Route path="bespoke/coachbuild/arcadia-droptail" element={<CoachbuildDetail title="Arcadia Droptail" subtitle="A haven of tranquillity" />} />
        <Route path="bespoke/coachbuild/amethyst-droptail" element={<CoachbuildDetail title="Amethyst Droptail" subtitle="Purple Majesty" />} />
        <Route path="bespoke/coachbuild/la-rose-noire-droptail" element={<CoachbuildDetail title="La Rose Noire Droptail" subtitle="The Dark Rose" />} />
        <Route path="bespoke/coachbuild/coachbuild-boat-tail" element={<CoachbuildDetail title="Boat Tail" subtitle="Nautical Grandeur" />} />
        <Route path="bespoke/coachbuild/coachbuild-sweptail" element={<CoachbuildDetail title="Sweptail" subtitle="The Epitome of Coachbuilding" />} />
        
        {/* Ownership Routes */}
        <Route path="ownership/owners-lounge" element={<OwnersLounge />} />
        <Route path="ownership/your-motor-car" element={<YourMotorCar />} />
        <Route path="ownership/whispers" element={<Whispers />} />
        <Route path="ownership/charging" element={<Charging />} />
        
        {/* Muse Routes */}
        <Route path="muse" element={<Muse />} />
        <Route path="muse/the-dream-commission" element={<DreamCommission />} />
        <Route path="muse/spirit-of-ecstasy-challenge" element={<SpiritOfEcstasyChallenge />} />
        <Route path="muse/muse-stories" element={<MuseStories />} />
      </Route>
    </Routes>
  )
}

export default App