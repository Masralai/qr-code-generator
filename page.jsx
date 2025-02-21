import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Download, Link2, QrCode, Smartphone, Zap } from "lucide-react"
import QRGenerator from "./qr-generator"

export default function Page() {
  return (<>
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      
      <section className="container px-4 pt-20 pb-12 md:pt-32">
        <div className="text-center space-y-4 mb-12">
          
          <p className="mx-auto max-w-[600px] text-gray-800 md:text-xl">
            Generate QR codes for URLs, text, and more. 
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <QRGenerator />
        </div>
      </section>

    </div>
    </>
  )
}

