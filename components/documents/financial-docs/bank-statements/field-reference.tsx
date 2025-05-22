import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FieldReference() {
  const headerFields = [
    { name: "account_holder", description: "Name of the account holder or entity" },
    { name: "account_number", description: "Masked or full account number" },
    { name: "bank_name", description: "Name of the issuing bank" },
    { name: "statement_period", description: "Start and end date of the statement" },
    { name: "opening_balance", description: "Balance at the beginning of the period" },
    { name: "closing_balance", description: "Balance at the end of the period" },
  ]

  const transactionFields = [
    { name: "date", description: "Transaction date in ISO format" },
    { name: "description", description: "Transaction description or narration" },
    { name: "debit_credit", description: "DR or CR indicator" },
    { name: "amount", description: "Transaction amount" },
    { name: "balance", description: "Running balance after transaction" },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Field Reference</h2>

        <Tabs defaultValue="header" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="header">Header Fields</TabsTrigger>
            <TabsTrigger value="transaction">Transaction Fields</TabsTrigger>
          </TabsList>

          <TabsContent value="header">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-indigo-700">Statement Header Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Field Name</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {headerFields.map((field) => (
                      <TableRow key={field.name}>
                        <TableCell className="font-mono text-sm">{field.name}</TableCell>
                        <TableCell>{field.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transaction">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-indigo-700">Transaction Line Items</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Field Name</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionFields.map((field) => (
                      <TableRow key={field.name}>
                        <TableCell className="font-mono text-sm">{field.name}</TableCell>
                        <TableCell>{field.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
