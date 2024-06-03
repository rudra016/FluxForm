import { Delete, Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

  
const FieldEdit = ({defaultValue, onUpdate, deleteField}) => {
  const [label, SetLabel] = useState(defaultValue?.label);
  const [placeholder, SetPlaceholder] = useState(defaultValue?.placeholder);
  return (
    <div className='flex gap-2'>
        <Popover>
        <PopoverTrigger><Edit className='w-5 h-5 text-gray-500'/></PopoverTrigger>
        <PopoverContent>
          <h2>Edit Fields</h2>
          <div>
            <label className='text-xs'>Label Name</label>
            <Input type="text" defaultValue={defaultValue.label} onChange={(e)=>SetLabel(e.target.value)} />
          </div>
          <div>
            <label className='text-xs'>Placeholder Name</label>
            <Input type="text" defaultValue={defaultValue.placeholder} onChange={(e)=>SetPlaceholder(e.target.value)} />
          </div>
          <Button size="sm" className="mt-3" onClick={()=>onUpdate({
            label: label,
            placeholder: placeholder
          })}>Update</Button>
        </PopoverContent>
        </Popover>
        
       
        <AlertDialog>
        <AlertDialogTrigger>
        <Trash className='w-5 h-5 text-red-500'/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deleteField()}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


    </div>
  )
}

export default FieldEdit