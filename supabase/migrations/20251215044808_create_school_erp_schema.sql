/*
  # School ERP Database Schema

  1. New Tables
    - `profiles` - User profiles (admin, teacher, student, parent)
      - `id` (uuid, references auth.users)
      - `full_name` (text)
      - `role` (text) - admin, teacher, student, parent
      - `email` (text)
      - `phone` (text)
      - `avatar_url` (text)
      - `created_at` (timestamptz)
      
    - `students` - Student information
      - `id` (uuid, primary key)
      - `profile_id` (uuid, references profiles)
      - `admission_number` (text, unique)
      - `class` (text)
      - `section` (text)
      - `roll_number` (text)
      - `date_of_birth` (date)
      - `parent_id` (uuid)
      - `created_at` (timestamptz)
      
    - `teachers` - Teacher information
      - `id` (uuid, primary key)
      - `profile_id` (uuid, references profiles)
      - `employee_id` (text, unique)
      - `subject` (text)
      - `qualification` (text)
      - `joining_date` (date)
      - `created_at` (timestamptz)
      
    - `classes` - Class schedule
      - `id` (uuid, primary key)
      - `subject` (text)
      - `teacher_id` (uuid)
      - `class_name` (text)
      - `section` (text)
      - `start_time` (time)
      - `end_time` (time)
      - `day_of_week` (text)
      - `created_at` (timestamptz)
      
    - `events` - School events
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `event_date` (date)
      - `event_time` (time)
      - `location` (text)
      - `created_at` (timestamptz)
      
    - `fees` - Fee records
      - `id` (uuid, primary key)
      - `student_id` (uuid)
      - `amount` (numeric)
      - `due_date` (date)
      - `paid_date` (date)
      - `status` (text) - pending, paid, overdue
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'teacher', 'student', 'parent')),
  email text UNIQUE NOT NULL,
  phone text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  admission_number text UNIQUE NOT NULL,
  class text NOT NULL,
  section text NOT NULL,
  roll_number text NOT NULL,
  date_of_birth date,
  parent_id uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view students"
  ON students FOR SELECT
  TO authenticated
  USING (true);

-- Teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  employee_id text UNIQUE NOT NULL,
  subject text NOT NULL,
  qualification text,
  joining_date date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view teachers"
  ON teachers FOR SELECT
  TO authenticated
  USING (true);

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject text NOT NULL,
  teacher_id uuid REFERENCES teachers(id),
  class_name text NOT NULL,
  section text NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  day_of_week text NOT NULL CHECK (day_of_week IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view classes"
  ON classes FOR SELECT
  TO authenticated
  USING (true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date date NOT NULL,
  event_time time,
  location text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view events"
  ON events FOR SELECT
  TO authenticated
  USING (true);

-- Fees table
CREATE TABLE IF NOT EXISTS fees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id),
  amount numeric NOT NULL,
  due_date date NOT NULL,
  paid_date date,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE fees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view fees"
  ON fees FOR SELECT
  TO authenticated
  USING (true);