'use client'

import React, { useState } from 'react'

import { File, FileText, Sheet, X } from 'lucide-react'

export interface FileUploadConfig {
  allowedTypes?: string[] // e.g., ['png', 'jpeg', 'jpg', 'pdf']
  maxSizeMB?: number // e.g., 2
  multiple?: boolean // e.g., false for single upload only
  label?: any
}

export interface UploadedFile {
  id: string
  file: File
  type: 'image' | 'pdf' | 'excel' | 'document' | 'other'
  error?: string
}

interface FileUploadCompactProps {
  config?: FileUploadConfig
  onFilesChange?: (files: UploadedFile[]) => void
  uploadedFiles: UploadedFile[]
  setUploadedFiles: (files: UploadedFile[]) => void
}

export default function FileUploadCompact({
  config = {
    allowedTypes: ['png', 'jpeg', 'jpg', 'pdf'],
    maxSizeMB: 2,
    multiple: false,
    label: 'Upload Document'
  },
  onFilesChange,
  uploadedFiles,
  setUploadedFiles
}: FileUploadCompactProps) {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState('')

  const id = React.useId()

  const inputId = `file-upload-compact-${config.label?.replace(/\s+/g, '-').replace(/\W/g, '').toLowerCase()}-${id}`

  const getFileType = (file: File): UploadedFile['type'] => {
    const type = file.type
    const name = file.name.toLowerCase()

    if (type.startsWith('image/')) return 'image'
    if (type === 'application/pdf') return 'pdf'
    if (name.endsWith('.xlsx') || name.endsWith('.xls') || type.includes('spreadsheet')) return 'excel'
    if (name.endsWith('.docx') || name.endsWith('.doc') || type.includes('word') || type.includes('document'))
      return 'document'

    return 'other'
  }

  const validateFile = (file: File): string | null => {
    const fileExt = file.name.split('.').pop()?.toLowerCase()

    // TYPE CHECK
    if (config.allowedTypes && !config.allowedTypes.includes(fileExt || '')) {
      return `File type .${fileExt} not allowed. Allowed: ${config.allowedTypes.join(', ').toUpperCase()}`
    }

    // SIZE CHECK
    const fileSizeMB = file.size / (1024 * 1024)
    if (config.maxSizeMB && fileSizeMB > config.maxSizeMB) {
      return `File size ${fileSizeMB.toFixed(2)}MB exceeds limit of ${config.maxSizeMB}MB`
    }

    return null
  }

  // const validateFile = (file: File): string | null => {
  //     // Check file type
  //     if (config.allowedTypes && config.allowedTypes.length > 0) {
  //         const fileExt = file.name.split(".").pop()?.toLowerCase()
  //         if (!fileExt || !config.allowedTypes.includes(fileExt)) {
  //             return `File type .${fileExt} not allowed. Allowed: ${config.allowedTypes.join(", ")}`
  //         }
  //     }

  //     // Check file size
  //     if (config.maxSizeMB) {
  //         const fileSizeMB = file.size / (1024 * 1024)
  //         if (fileSizeMB > config.maxSizeMB) {
  //             return `File size ${fileSizeMB.toFixed(2)}MB exceeds limit of ${config.maxSizeMB}MB`
  //         }
  //     }

  //     return null
  // }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const files = e.dataTransfer.files
    if (files) handleFiles(files)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) handleFiles(files)
  }

  const handleFiles = (files: FileList) => {
    setError('')

    // SINGLE UPLOAD MODE
    if (!config.multiple) {
      const file = files[0]
      const validationError = validateFile(file)

      if (validationError) {
        setError(validationError)

        return
      }

      const newFile: UploadedFile = {
        id: `${Date.now()}-${Math.random()}`,
        file,
        type: getFileType(file)
      }

      setUploadedFiles([newFile])
      onFilesChange?.([newFile])

      return
    }

    // MULTIPLE UPLOAD MODE
    const selected = Array.from(files)
    const validFiles: UploadedFile[] = []

    selected.forEach(file => {
      const validationError = validateFile(file)

      const newFile: UploadedFile = {
        id: `${Date.now()}-${Math.random()}`,
        file,
        type: getFileType(file),
        error: validationError || undefined
      }

      if (validationError) {
        setError(validationError)
      } else {
        validFiles.push(newFile)
      }
    })

    if (validFiles.length > 0) {
      const updated = [...uploadedFiles, ...validFiles]
      setUploadedFiles(updated)
      onFilesChange?.(updated)
    }
  }

  // const handleFiles = (files: FileList) => {
  //     setError("")

  //     // Check multiple upload restriction
  //     // if (!config.multiple && uploadedFiles.length + files.length > 1) {
  //     //     setError("Only single file upload allowed")

  //     //     return
  //     // }

  //     // Single upload mode → always replace the file
  //     if (!config.multiple) {
  //         const file = files[0]
  //         const validationError = validateFile(file)

  //         const newFile: UploadedFile = {
  //             id: `${Date.now()}-${Math.random()}`,
  //             file,
  //             type: getFileType(file),
  //             error: validationError || undefined,
  //         }

  //         if (validationError) {
  //             setError(validationError)

  //             return
  //         }

  //         setUploadedFiles([newFile])
  //         onFilesChange?.([newFile])

  //         return
  //     }

  //     Array.from(files).forEach((file) => {
  //         const validationError = validateFile(file)

  //         const newFile: UploadedFile = {
  //             id: `${Date.now()}-${Math.random()}`,
  //             file,
  //             type: getFileType(file),
  //             error: validationError || undefined,
  //         }

  //         if (!validationError) {
  //             setUploadedFiles((prev) => {
  //                 const updated = config.multiple ? [...prev, newFile] : [newFile]
  //                 onFilesChange?.(updated)

  //                 return updated
  //             })
  //         }
  //     })
  // }

  const removeFile = (id: string) => {
    const updated = uploadedFiles.filter(f => f.id !== id)
    setUploadedFiles(updated)
    onFilesChange?.(updated)
    setError('')
  }

  const getFilePreview = (uploadedFile: UploadedFile) => {
    const { file, type } = uploadedFile

    if (type === 'image') {
      return (
        <img
          src={URL.createObjectURL(file) || '/placeholder.svg'}
          alt={file.name}
          className='h-full max-h-24 w-full max-w-24 object-contain'
        />
      )
    }

    const iconMap = {
      pdf: <FileText className='h-5 w-5 text-red-500' />,
      excel: <Sheet className='h-5 w-5 text-green-500' />,
      document: <File className='h-5 w-5 text-blue-500' />,
      other: <File className='h-5 w-5 text-gray-500' />
    }

    return <div className='flex h-full items-center justify-center bg-slate-50'>{iconMap[type]}</div>
  }

  return (
    <div className='w-full'>
      <div className='md:bg-accent/10 rounded-lg bg-slate-100 p-2'>
        {/* Upload Zone - Compact */}
        <div
          className={`rounded-lg border-2 border-dashed p-2 text-center transition-all ${
            dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type='file'
            id={inputId}
            multiple={config.multiple}
            onChange={handleChange}
            className='hidden'
            accept={config.allowedTypes?.map(t => `.${t}`).join(',') || '*/*'}
          />
          <label htmlFor={inputId} className='cursor-pointer'>
            <div className='flex items-center justify-center gap-2'>
              <svg className='h-8 w-8 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-medium text-slate-700'>{config.label || 'Upload File'}</span>
                <span className='text-xs text-slate-500'>
                  {config.allowedTypes?.join(', ').toUpperCase() || 'Any file'}{' '}
                  {config.maxSizeMB && `(Max ${config.maxSizeMB}MB)`}
                </span>
              </div>
            </div>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className='mt-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700'>
            {error}
          </div>
        )}

        {/* Uploaded Files - Compact Grid */}
        {uploadedFiles.length > 0 && (
          <div className='mt-4'>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {uploadedFiles.map(uploadedFile => (
                <div key={uploadedFile.id}>
                  <div
                    className={`group relative flex overflow-hidden rounded-lg border-2 bg-white transition-all ${
                      uploadedFile.error
                        ? 'border-red-200 opacity-60'
                        : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    {/* Preview */}
                    <div className='flex h-16 w-16! shrink-0 items-center justify-center overflow-hidden bg-slate-100'>
                      {getFilePreview(uploadedFile)}
                    </div>

                    {/* Remove Button */}
                    {!uploadedFile.error && (
                      <button
                        onClick={() => removeFile(uploadedFile.id)}
                        className='absolute top-1 right-1 rounded bg-red-500 p-1 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-600'
                      >
                        <X className='h-3 w-3 text-white' />
                      </button>
                    )}

                    {/* File Info */}
                    <div className='max-w-24 border-t border-slate-200 bg-white p-2'>
                      <p className='truncate text-xs font-medium text-slate-900'>{uploadedFile.file.name}</p>
                      {uploadedFile.error ? (
                        <p className='line-clamp-1 text-xs text-red-600'>{uploadedFile.error}</p>
                      ) : (
                        <p className='line-clamp-1 text-xs text-slate-500'>
                          {(uploadedFile.file.size / 1024).toFixed(1)} KB
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
