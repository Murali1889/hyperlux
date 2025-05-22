import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function DeveloperOutput() {
  const csvData = `date,description,debit_credit,amount,balance
2023-04-01,"SALARY CREDIT - ACME CORP",CR,5250.00,5250.00
2023-04-03,"AMAZON PAYMENT",DR,129.99,5120.01
2023-04-05,"ATM WITHDRAWAL - MAIN ST",DR,200.00,4920.01`

  const jsonData = `{
  "header": {
    "account_holder": "JOHN SMITH",
    "account_number": "XXXX1234",
    "bank_name": "FIRST NATIONAL BANK",
    "statement_period": "2023-04-01 to 2023-04-30",
    "opening_balance": 0.00,
    "closing_balance": 4356.78
  },
  "transactions": [
    {
      "date": "2023-04-01",
      "description": "SALARY CREDIT - ACME CORP",
      "debit_credit": "CR",
      "amount": 5250.00,
      "balance": 5250.00
    },
    {
      "date": "2023-04-03",
      "description": "AMAZON PAYMENT",
      "debit_credit": "DR",
      "amount": 129.99,
      "balance": 5120.01
    },
    {
      "date": "2023-04-05",
      "description": "ATM WITHDRAWAL - MAIN ST",
      "debit_credit": "DR",
      "amount": 200.00,
      "balance": 4920.01
    }
  ],
  "summary": {
    "total_credits": 5250.00,
    "total_debits": 893.22,
    "transaction_count": 12
  }
}`

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Developer Output Example</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Clean, structured data ready for integration with your financial systems and analysis tools.
        </p>

        <Tabs defaultValue="json" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="json">JSON Output</TabsTrigger>
            <TabsTrigger value="csv">CSV Output</TabsTrigger>
          </TabsList>

          <TabsContent value="json">
            <Card className="border-indigo-100 shadow-md">
              <CardContent className="pt-6 overflow-x-auto">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{jsonData}</code>
                </pre>
                <p className="mt-4 text-sm text-gray-600">
                  The JSON output includes header information, transaction details, and summary statistics in a nested
                  structure that's ideal for programmatic processing.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="csv">
            <Card className="border-indigo-100 shadow-md">
              <CardContent className="pt-6 overflow-x-auto">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{csvData}</code>
                </pre>
                <p className="mt-4 text-sm text-gray-600">
                  The CSV output focuses on transaction data in a tabular format, perfect for import into spreadsheets
                  or data analysis tools.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
