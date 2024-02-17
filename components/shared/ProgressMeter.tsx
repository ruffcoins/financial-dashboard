interface ProgressMeterProps {
  percent: number;
}

const ProgressMeter: React.FC<ProgressMeterProps> = ({ percent }) => {
  return (
    <div className="relative pt-1">
      <div className="w-full rounded-full bg-gray-200">
        <div
          className={`rounded-full py-2 bg-primary-900`}
          style={{ width: `${percent}%`, maxWidth: `100%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressMeter;
