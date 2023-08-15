import GetAnalysis from "./GetAnalysis/GetAnalysis"
import { Forms } from "./components/FormFactory"
import { Fields } from "./components/InputFactory"
import { useAnalysisStore } from "./store/AnalysisStore"

type Props = {}

export default function PageTest({ }: Props) {
  const { analyzes } = useAnalysisStore()
  return <GetAnalysis analysis={analyzes[0]} />
}